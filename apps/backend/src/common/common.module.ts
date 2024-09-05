import { CryptoService } from './services/crypto.service';
import { Global, Module } from '@nestjs/common';
import { v4 } from 'uuid';

@Global()
@Module({
  imports: [],
  providers: [CryptoService, { provide: 'uuidV4Generator', useValue: v4 }],
  exports: [CryptoService, { provide: 'uuidV4Generator', useValue: v4 }],
})
export class CommonModule {}
