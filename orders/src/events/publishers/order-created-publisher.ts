import { Publisher, OrderCreatedEvent, Subjects } from '@sagewillcom/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
