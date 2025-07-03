import request from "@/utils/request";
import type { BasicGood, BasicProgress } from "./data.d";

export async function queryBasicProfile(): Promise<{
  basicProgress: BasicProgress[];
  basicGoods: BasicGood[];
}> {
  return request("/api/profile/basic");
}
