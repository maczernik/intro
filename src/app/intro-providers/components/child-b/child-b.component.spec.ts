import {
  DefaultRenderComponent,
  MockBuilder,
  MockedComponentFixture,
  MockProvider,
  MockRender,
} from 'ng-mocks';

import { ChildBComponent } from 'src/app/intro-providers/components/child-b/child-b.component';
import {
  COMPONENT_CONFIGURATION,
  ComponentConfiguration,
} from 'src/app/intro-providers/injectors/component-configuration';
import { ProviderAService } from 'src/app/intro-providers/services/provider-a.service';
import { ProviderRootService } from 'src/app/intro-providers/services/provider-root.service';

const providerRootServiceStub: Partial<ProviderRootService> = {};

const configurationStub: Partial<ComponentConfiguration> = {
  context: '200',
};

describe('ChildBComponent', () => {
  let component: ChildBComponent;
  let providerAServiceStub: Partial<ProviderAService>;
  let fixture: MockedComponentFixture<
    ChildBComponent,
    DefaultRenderComponent<Partial<ChildBComponent>>
  >;

  beforeEach(() => {
    providerAServiceStub = {
      getPointDescription: jest.fn(),
    };

    return MockBuilder(ChildBComponent)
      .provide([
        MockProvider(ProviderRootService, providerRootServiceStub),
      ])
      .mock(COMPONENT_CONFIGURATION, configurationStub)
      .mock(ProviderAService, providerAServiceStub)
      .then(() => {
        fixture = MockRender(ChildBComponent, {});
        component = fixture.point.componentInstance;
      });
  });

  it('should be created when initialized', () => {
    // Arrange

    // Act

    // Assert
    expect(component).toBeTruthy();
  });

  describe('showNotification', () => {
    // Test service as black box IN / OUT.
    it('should request for point description when called', () => {
      // Arrange

      // Act
      component.showNotification();

      // Assert
      expect(providerAServiceStub.getPointDescription).toHaveBeenCalledTimes(1);
    });

    it('should return proper point description when called', () => {
      // Arrange
      const expectedMessage = 'Hi!';
      jest
        .spyOn(providerAServiceStub, 'getPointDescription')
        .mockImplementation(() => expectedMessage);

      // Act
      const message = component.showNotification();

      // Assert
      expect(message).toBe(expectedMessage);
    });
  });
});
