import { BaseSwagLabPage } from "./BaseSwagLab.page";

export class InventoryPage extends BaseSwagLabPage {
  url = "/inventory.html";

  headerTitle = this.page.locator(".title");

  inventoryItems = this.page.locator(".inventory_item");
  sortContainer = this.page.locator('[data-test="product-sort-container"]');

  addItemToCartButton = this.page.locator('[id^="add-to-cart"]');
  inventoryItemName = this.page.locator('[data-test="inventory-item-name"]');
  inventoryItemPrice = this.page.locator('[data-test="inventory-item-price"]');
  inventoryItemDescription = this.page.locator(
    '[data-test="inventory-item-desc]'
  );
  async addItemToCartById(id) {
    await this.addItemToCartButton.nth(id).click();
  }
}
