'use client';

import { IconType } from "react-icons";

import useCountries from "@/app/hooks/useCountries";

import Avatar from "@/app/components/Avatar";
import { User } from "@prisma/client";
import ListingCategory from "./ListingCategory";


interface ListingInfoProps {
  user: User,
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();


  return ( 
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div className="mr-1">Hosted by </div>
          <Avatar src={user?.image} />
          <div className="text-[16px]">{user?.name}</div>
        </div>
        <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>
            {guestCount} guests
          </div>
          <div>
            {roomCount} rooms
          </div>
          <div>
            {bathroomCount} bathrooms
          </div>
        </div>
      </div>
      <hr />
      {
          category && (
        <ListingCategory
          icon={category.icon} 
          label={category?.label}
          description={category?.description} 
        />
      )
      }
      <hr />
      <div className=" pb-10
      text-lg font-light text-neutral-500">
        {description}
      </div>
    </div>
   );
}
 
export default ListingInfo;