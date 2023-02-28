export type Repository<T> = {
    findAll(): T[]
    findById(id: string | number): T
    create(input: T): T
    update(id: string | number, input: Partial<T>): T
    delete(id: string | number): void
}