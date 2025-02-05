import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lead } from "./lead.entity";
import axios from "axios";

@Injectable()
export class LeadService {
  constructor(
    @InjectRepository(Lead) private leadRepository: Repository<Lead>,
  ) {}

  async getIPDetails(ip: string) {
    try {
      const response = await axios.get(`https://ipapi.co/${ip}/json/`);
      return {
        city: response.data.city || null,
        country: response.data.country_name || null,
      };
    } catch (error) {
      console.error("IP Lookup failed:", error);
      return { city: null, country: null };
    }
  }

  async createLead(email: string, ip: string, source: string, userAgent: string, referrer: string) {
    const { city, country } = await this.getIPDetails(ip);

    const lead = this.leadRepository.create({
      email,
      ip,
      city,
      country,
      source,
      userAgent,
      referrer,
    });

    return await this.leadRepository.save(lead);
  }

  async getAllLeads() {
    return await this.leadRepository.find();
  }
}
