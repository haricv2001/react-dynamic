interface ComponentConfig {
  style: string;
}

enum DataSourceType {
  INLINE,
  API
}

class DataSource {
  type: DataSourceType;
  api?: string;
  data?: any;
}
interface ComponentProps {
  type: string;
  id: string;
  config?: any;
  events?: any;
  toolbar?: any;
  data?: DataSource;
}
