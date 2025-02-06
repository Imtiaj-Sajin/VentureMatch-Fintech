import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lead } from "./lead.entity";

@Injectable()
export class LeadService {
  constructor(
    @InjectRepository(Lead) private leadRepository: Repository<Lead>,
  ) {}

  async createLead(data: {
    email: string;
    ip: string;
    city: string;
    regionName: string;
    country: string;
    latitude: string;
    longitude: string;
    timezone: string;
    currency: string;
    mobile: boolean;  
    device: string;
    source: string;
    userAgent: string;
    referrer: string;
  }) {
    const lead = this.leadRepository.create(data);
    return await this.leadRepository.save(lead);
  }

  async getAllLeads() {
    return await this.leadRepository.find();
  }
}
