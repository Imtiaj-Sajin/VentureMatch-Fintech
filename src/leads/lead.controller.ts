import { Controller, Post, Body, Req, Get } from "@nestjs/common";
import { LeadService } from "./lead.service";
import { Request } from "express";

@Controller("leads")
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post("track")
  async trackLead(@Body() body: { email: string; source: string }, @Req() req: Request) {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const userAgent = req.headers["user-agent"];
    const referrer = req.headers["referer"] || "";

    return await this.leadService.createLead(body.email, ip as string, body.source, userAgent, referrer);
  }

  @Get()
  async getAllLeads() {
    return await this.leadService.getAllLeads();
  }
}
