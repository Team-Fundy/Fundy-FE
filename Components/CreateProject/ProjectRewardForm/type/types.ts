export interface RewardPackageItemProps {
  rewardPackage?: {
    id: string;
    titleName?: string;
    titleImage?: File;
    rewardItemList?: [];
    numLimit?: Number;
    deriveDate?: Date;
    minimumPrice?: Number;
  };
}

export interface RewardPackageItemType {
  id: string;
  titleName?: string;
  titleImage?: File;
  rewardItemList?: [];
  numLimit?: Number;
  deriveDate?: Date;
  minimumPrice?: Number;
  isShip?: boolean;
  selectedItemNum?: string[];
}
