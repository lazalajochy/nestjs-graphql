import { Module } from '@nestjs/common';
import { HelloWordResolver } from 'src/hello-word/hello-word.resolver';

@Module({
    providers:[HelloWordResolver]
})
export class HelloWorldModule {}
