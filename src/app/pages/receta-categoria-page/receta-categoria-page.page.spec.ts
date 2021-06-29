import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecetaCategoriaPagePage } from './receta-categoria-page.page';

describe('RecetaCategoriaPagePage', () => {
  let component: RecetaCategoriaPagePage;
  let fixture: ComponentFixture<RecetaCategoriaPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaCategoriaPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecetaCategoriaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
