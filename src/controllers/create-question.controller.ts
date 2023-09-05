import { Body, Controller, Post, UseGuards, UsePipes } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { AuthGuard } from '@nestjs/passport'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import { z } from 'zod'

const createQuestionBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

@Controller('/questions')
@UseGuards(AuthGuard('jwt'))
export class CreateQuestionController {
  constructor(
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createQuestionBodySchema))
  async handle(@Body() body: CreateQuestionBodySchema) {
    // const {} = body
  }
}
