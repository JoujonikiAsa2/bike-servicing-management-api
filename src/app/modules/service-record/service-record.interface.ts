export type IServiceRecord = {
    bikeId: string,
    serviceDate: Date,
    description: string,
    status: 'pending' | 'in-progress' | 'done'
}