import { Subjects, Publisher, OrderCancelledEvent } from '@sagewillcom/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
