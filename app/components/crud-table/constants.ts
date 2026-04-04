export const STATUS_MAP = {
  todo: { text: '待办', status: 'Default' },
  progress: { text: '进行中', status: 'Processing' },
  done: { text: '已完成', status: 'Success' },
};

export const PRIORITY_MAP = {
  low: { text: '低', color: 'blue' },
  medium: { text: '中', color: 'orange' },
  high: { text: '高', color: 'red' },
};

type MapItem = { text: string; [key: string]: any };

export function mapToOptions<T extends Record<string, MapItem>>(map: T) {
  return Object.entries(map).map(([value, item]) => ({
    label: item.text,
    value,
  }));
}

export const STATUS_OPTIONS = mapToOptions(STATUS_MAP);
export const PRIORITY_OPTIONS = mapToOptions(PRIORITY_MAP);
