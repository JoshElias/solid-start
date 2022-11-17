import { createResource } from "solid-js";
import { OpenAPI, InventoryService, Item } from "../../clover";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import Inventory from "~/components/Inventory";



export function routeData() {
    return createServerData$(async () => {
      OpenAPI.BASE = import.meta.env.CLOVER_BASE_URL;
        OpenAPI.TOKEN = import.meta.env.CLOVER_API_KEY;
        return (await InventoryService.inventoryGetItems(
                import.meta.env.CLOVER_MERCHANT_ID
            ))
            .elements
            .filter((item: Item) => item.autoManage) as Item[];
    });
}

export default function Home() {
  const items = useRouteData<typeof routeData>();

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <Inventory items={items()}/>
    </main>
  );
}
