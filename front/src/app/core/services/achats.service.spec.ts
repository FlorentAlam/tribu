import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { AchatItem } from "../models/achats.model";
import { AchatService } from "./achats.service";

describe('[Service] Achats', () => {
    let httpMock: HttpTestingController;
    let service: AchatService;
    let httpClient: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [ AchatService ]
        });
        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.inject(AchatService);
        httpClient = TestBed.inject(HttpClient);
    });

    describe('addItem()', () => {
        it('should call http POST and return AchatItem', () => {
            const item: AchatItem = {
                name: "test",
                quantity: "12gr",
                id: 2
            };

            service.addItem("test", 0, "12gr").subscribe(data => {
                expect(data).toEqual(item);
            });

            const req = httpMock.expectOne(`http://localhost:4201/achat/item`);
            expect(req.request.method).toEqual('POST');
            httpMock.verify();
        });
    })
});