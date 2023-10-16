import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'

import {
  QuestionComment,
  QuestionCommentProps,
} from '@/domain/forum/enterprise/entities/question-comment'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { makeQuestion } from './make-question'
import { PrismaQuestionMapper } from '@/infra/database/prisma/mappers/prisma-question-mapper'
import { Injectable } from '@nestjs/common'

export function makeQuestionComment(
  override: Partial<QuestionCommentProps> = {},
  id?: UniqueEntityID
) {
  const question = QuestionComment.create(
    {
      authorId: new UniqueEntityID(),
      questionId: new UniqueEntityID(),
      content: faker.lorem.text(),
      ...override,
    },
    id
  )

  return question
}

@Injectable()
export class QuestionCommentFactory {
  constructor(private readonly prisma: PrismaService) {}

  async makePrismaQuestion(
    data: Partial<QuestionProps> = {}
  ): Promise<Question> {
    const questionComment = makeQuestion(data)

    await this.prisma.comment.create({
      data: PrismaQuestionMapper.toPrisma(questionComment),
    })

    return questionComment
  }
}
