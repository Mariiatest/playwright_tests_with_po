import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/Login.page";
import { InventoryPage } from "../pages/Inventory.page";
import { BasePage } from "../pages/Base.page";
import { ShoppingCartPage } from "../pages/ShoppingCart.page";
test("Sorting product items on Inventory page Z-A", async ({ page }) => {
  const basePage = new BasePage(page);
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await basePage.navigate();
  await loginPage.performLogin("standard_user", "secret_sauce");

  const getItemNames = async () => {
    const itemCount = await inventoryPage.inventoryItemName.count();
    const items = [];

    for (let i = 0; i < itemCount; i++) {
      const element = inventoryPage.inventoryItemName.nth(i);
      const itemName = await element.textContent();
      if (itemName) {
        items.push(itemName.trim());
      }
    }

    return items;
  };

  const sortedItems = (await getItemNames()).sort((a, b) => b.localeCompare(a));

  await inventoryPage.sortContainer.click();
  await inventoryPage.sortContainer.selectOption("Name (Z to A)");

  const displayedItems = await getItemNames();

  expect(displayedItems).toEqual(sortedItems);
});









