import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    /*MongooseModule.forRoot('mongodb://root:root@localhost/sgbd', {
      authSource: 'admin',
    }),*/
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService) => {
        return {
          uri: `mongodb://${configService.get('MONGO_DB_USER')}:${configService.get('MONGO_DB_PASSWORD')}@${configService.get('MONGO_DB_HOST')}:${configService.get('MONGO_DB_PORT')}/${configService.get('MONGO_DB_NAME')}`,
          authSource: 'admin',
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
