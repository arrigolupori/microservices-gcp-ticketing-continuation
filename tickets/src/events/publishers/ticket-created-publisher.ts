import { Publisher, Subjects, TicketCreatedEvent } from '@sagewillcom/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
