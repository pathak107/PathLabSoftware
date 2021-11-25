import { Injectable } from '@nestjs/common';
import { LabsService } from '../labs/labs.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private labsService: LabsService,
    private jwtService: JwtService,
  ) {}

  async validateLab(email: string, pass: string): Promise<any> {
    const lab = await this.labsService.findByEmail(email);
    if (lab) {
      const isMatch = await bcrypt.compare(pass, lab.password);
      if (isMatch) {
        return {
          lab_id: lab.id,
          email: lab.email,
        };
      }
    }
    return null;
  }

  async loginLab(payload: { lab_id: string; email: string }) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
