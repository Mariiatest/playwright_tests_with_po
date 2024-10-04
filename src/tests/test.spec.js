import { test} from '@playwright/test';
import { LoginPage } from "../pages/Login.page";
import { InventoryPage } from "../pages/Inventory.page";
import { BasePage } from '../pages/Base.page';

test('Sorting',
  async ({page}) => { 
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await basePage.navigate();
    await loginPage.performLogin("standard_user", "secret_sauce");
    await inventoryPage.sortContainer.click();
    await inventoryPage.sortContainer.selectOption("Name (Z to A)");
  });

