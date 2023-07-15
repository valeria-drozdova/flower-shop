import { 
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put, 
} from '@nestjs/common';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';
import { FlowersService } from './flowers.service';

@Controller('flowers')
export class FlowersController {
    constructor(private readonly service: FlowersService){}

    @Get()
    async index(){
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createFlowerDto: CreateFlowerDto){
        return await this.service.create(createFlowerDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateFlowerDto: UpdateFlowerDto) {
        return await this.service.update(id, updateFlowerDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }


}
