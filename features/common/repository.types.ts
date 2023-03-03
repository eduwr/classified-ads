export type Repository<T> = {
    findAll(): Promise<T[]>
    findById(id: string | number): Promise<T>
    create(input: T): Promise<string>
    update(id: string | number, input: Partial<T>): Promise<T | undefined>
    delete(id: string | number): Promise<number>
}