import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaQuestionCommentsRepository
  implements QuestionCommentsRepository
{
  async findById(id: string) {
    throw new Error('Method not implemented.')
  }

  async findManyByQuestionId(questionId: string, params: PaginationParams) {
    throw new Error('Method not implemented.')
  }

  async create(questionComment: QuestionComment) {
    throw new Error('Method not implemented.')
  }

  async delete(questionComment: QuestionComment) {
    throw new Error('Method not implemented.')
  }
}