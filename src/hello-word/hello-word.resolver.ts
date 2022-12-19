import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWordResolver {
    
    @Query(() => String)
    hello(): string{
        return 'hello from graphql using nestjs'
    }

}
