import { test} from '@playwright/test';
import { LoginPage } from "../pages/Login.page";
import { InventoryPage } from "../pages/Inventory.page";
import { BasePage } from '../pages/Base.page';
import { ShoppingCartPage } from '../pages/ShoppingCart.page';

test ('Adding random products to Shopping Cart and verifying items title/price/description',
    async ({page}) => {
      const shoppingCartPage = new ShoppingCartPage(page);
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);
      const basePage = new BasePage(page);
      await basePage.navigate();
      await loginPage.performLogin("standard_user", "secret_sauce")
      const randomItems = Math.floor(Math.random() * 10) + 1;
      const itemAttributes = await inventoryPage.inventoryItemName.getAttribute();
      const name = itemAttributes[randomItems][text]
      const price = itemAttributes [randomItems][text]
      const description = itemAttributes [randomItems][text]
      await inventoryPage.inventoryItems.nth(3,5).click()
      await page.locator ('[data-test="shopping-cart-link"]').click
      await shoppingCartPage.inventoryItemName.isVisible();
      await shoppingCartPage.inventoryItemPrice.isVisible();
      await shoppingCartPage.inventoryItemDescription.isVisible();
    })