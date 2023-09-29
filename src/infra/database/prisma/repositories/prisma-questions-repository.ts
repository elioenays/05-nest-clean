import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  async findById(id: string) {
    throw new Error('Method not implemented.')
  }

  async findBySlug(slug: string) {
    throw new Error('Method not implemented.')
  }

  async findManyRecent(params: PaginationParams) {
    throw new Error('Method not implemented.')
  }

  async save(question: Question) {
    throw new Error('Method not implemented.')
  }

  async create(question: Question) {
    throw new Error('Method not implemented.')
  }

  async delete(question: Question) {
    throw new Error('Method not implemented.')
  }
}
