import { DisplayService } from "./DisplayService";
import { ErrorXMLDisplayService } from "./ErrorXMLDisplayService";
import { FeedbackXMLDisplayService } from "./FeedbackXMLDisplayService";
import { OrderXMLDisplayService } from "./OrderXMLDisplayService";
import { ResponseXMLDisplayService }  from "./ResponseXMLDisplayService";

let service: DisplayService = new FeedbackXMLDisplayService();
service.display();

service = new ErrorXMLDisplayService();
service.display();

service = new OrderXMLDisplayService();
service.display();

service = new ResponseXMLDisplayService();
service.display();

