import { Attachment as PrismaQuestionAttachment } from '@prisma/client'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'

export class PrismaQuestionAttachmentMapper {
  static toDomain(raw: PrismaQuestionAttachment): QuestionAttachment {
    if (!raw.questionId) {
      throw new Error('Invalid comment type.')
    }

    return QuestionAttachment.create(
      {
        attachmentId: new UniqueEntityID(raw.id),
        questionId: new UniqueEntityID(raw.questionId),
      },
      new UniqueEntityID(raw.id)
    )
  }
}
