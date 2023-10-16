import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { z } from 'zod'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.strategy'
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/edit-answer'

const editAnswerBodySchema = z.object({
  content: z.string(),
})

const bodyValidationPipe = new ZodValidationPipe(editAnswerBodySchema)

type EditAnswerBodySchema = z.infer<typeof editAnswerBodySchema>

@Controller('/answers/:id')
export class EditAnswerController {
  constructor(private editAnswer: EditAnswerUseCase) {}

  @Put()
  @HttpCode(204)
  async handle(
    @Body(bodyValidationPipe)
    body: EditAnswerBodySchema,
    @CurrentUser() user: UserPayload,
    @Param('id') answerId: string
  ) {
    const { content } = body
    const userId = user.sub

    const result = await this.editAnswer.execute({
      answerId,
      attachmentsIds: [],
      content,
      authorId: userId,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }
  }
}
