import { Module } from '@nestjs/common';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import { constants } from './constants';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsSchema } from './forms.model';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${constants.mdbUser}:${constants.mdbPass}@cluster0-rmhe5.gcp.mongodb.net/${constants.collection}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
    ),
    MongooseModule.forFeature([{name:'forms',schema:FormsSchema}]),
  ],
  controllers: [FormsController],
  providers: [FormsService]

})
export class AppModule {}
