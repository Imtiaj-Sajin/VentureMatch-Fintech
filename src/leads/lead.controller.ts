import { Controller, Post, Body, Req, Get } from '@nestjs/common';
import { LeadService } from './lead.service';
import { Request } from 'express';
import axios from 'axios';

@Controller('leads')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post('track')
  async trackLead(
    @Body() body: { 
      email: string; 
      ip: string; 
      city: string;
      regionName:string;
      country: string; 
      latitude: string; 
      longitude: string; 
      timezone: string; 
      currency: string; 
      mobile: boolean;  
      device: string; 
      source: string 
    },
    @Req() req: Request,
  ) {
    const userAgent = req.headers['user-agent'];
    const referrer = req.headers['referer'] || '';

    return await this.leadService.createLead({
      ...body,
      userAgent,
      referrer,
    });
  }

  @Get('get-ip')
  async getIPDetails(@Req() req: Request) {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    if (ip === '::1' || ip === '127.0.0.1') {
      ip = await this.getPublicIP();
    }

    try {
      const response = await axios.get(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,lat,lon,timezone,currency,mobile,query`);
      
      if (response.data.status === "fail") {
        return { ip, city: "Unknown", country: "Unknown" };
      }

      const userAgent = req.headers['user-agent'] || '';
      const device = this.detectDevice(userAgent);

      return {
        ...response.data,
        device,  
        mobile: response.data.mobile || false,  
      };
    } catch (error) {
      console.error('Failed to fetch IP info:', error);
      return { ip, city: 'Unknown', country: 'Unknown' };
    }
  }

  private detectDevice(userAgent: string): string {
    if (/android/i.test(userAgent)) return "Android";
    if (/iphone|ipad|ipod/i.test(userAgent)) return "iOS";
    if (/windows/i.test(userAgent)) return "Windows";
    if (/macintosh|mac os x/i.test(userAgent)) return "Mac";
    if (/linux/i.test(userAgent)) return "Linux";
    return "Unknown";
  }

  private async getPublicIP() {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      return response.data.ip;
    } catch (error) {
      console.error('Error fetching public IP:', error);
      return '8.8.8.8';
    }
  }

  @Get()
  async getAllLeads() {
    return await this.leadService.getAllLeads();
  }
}
