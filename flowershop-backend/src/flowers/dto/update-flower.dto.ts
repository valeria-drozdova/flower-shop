import { BaseFlowerDto } from "./base-flower.dto";

export class UpdateFlowerDto extends BaseFlowerDto{
    completedAt: Date;
}