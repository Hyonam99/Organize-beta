import { writable } from "svelte/store";
import type { TaskDTO } from "$lib/types/custom.d.js";

export const TaskStore = writable<TaskDTO[]>([])
