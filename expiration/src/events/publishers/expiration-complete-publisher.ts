import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@sagewillcom/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
