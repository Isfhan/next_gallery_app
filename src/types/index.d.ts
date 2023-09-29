export interface CldUploadWidgetResultsInfo {
  id: string;
  batchId: string;
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: string;
  original_filename: string;
  path: string;
  thumbnail_url: string;
}

export interface CloudinarySearchApiResource {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  uploaded_at: string;
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: string;
  access_mode: string;
  access_control: any; // You can replace 'any' with a more specific type if needed
  etag: string;
  created_by: any; // You can replace 'any' with a more specific type if needed
  uploaded_by: any; // You can replace 'any' with a more specific type if needed
}

export interface CloudinarySearchApiResponse {
  total_count: number;
  time: number;
  next_cursor: string;
  resources: CloudinarySearchApiResource[];
  rate_limit_allowed: number;
  rate_limit_reset_at: string;
  rate_limit_remaining: number;
}
