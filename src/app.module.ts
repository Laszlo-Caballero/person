import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PersonModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
