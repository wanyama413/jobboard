"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MapPinIcon } from "lucide-react";

type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = [
  {
    value: "baringo",
    label: "Baringo",
  },
  {
    value: "bomet",
    label: "Bomet",
  },
  {
    value: "bungoma",
    label: "Bungoma",
  },
  {
    value: "busia",
    label: "Busia",
  },
  {
    value: "elgeyo marakwet",
    label: "Elgeyo Marakwet",
  },
  {
    value: "embu",
    label: "Embu",
  },
  {
    value: "garissa",
    label: "Garissa",
  },
  {
    value: "homabay",
    label: "Homabay",
  },
  {
    value: "isiolo",
    label: "Isiolo",
  },
  {
    value: "kajiado",
    label: "Kajiado",
  },
  {
    value: "kakamega",
    label: "Kakamega",
  },
  {
    value: "kericho",
    label: "Kericho",
  },
  {
    value: "kiambu",
    label: "Kiambu",
  },
  {
    value: "kilifi",
    label: "Kilifi",
  },
  {
    value: "kirinyaga",
    label: "Kirinyaga",
  },
  {
    value: "kisii",
    label: "Kisii",
  },
  {
    value: "kisumu",
    label: "Kisumu",
  },
  {
    value: "kitui",
    label: "Kitui",
  },
  {
    value: "kwale",
    label: "Kwale",
  },
  {
    value: "lamu",
    label: "Lamu",
  },
  {
    value: "laikipia",
    label: "Laikipia",
  },
  {
    value: "machakos",
    label: "Machakos",
  },
  {
    value: "makueni",
    label: "Makueni",
  },
  {
    value: "mandera",
    label: "Mandera",
  },

  {
    value: "meru",
    label: "Meru",
  },
  {
    value: "migori",
    label: "Migori",
  },
  {
    value: "marsabit",
    label: "Marsabit",
  },
  {
    value: "mombasa",
    label: "Mombasa",
  },
  {
    value: "muranga",
    label: "Muranga",
  },
  {
    value: "nairobi",
    label: "Nairobi",
  },
  {
    value: "nakuru",
    label: "Nakuru",
  },
  {
    value: "nandi",
    label: "Nandi",
  },
  {
    value: "narok",
    label: "Narok",
  },
  {
    value: "nyamira",
    label: "Nyamira",
  },
  {
    value: "nyandarua",
    label: "Nyandarua",
  },

  {
    value: "nyeri",
    label: "Nyeri",
  },
  {
    value: "samburu",
    label: "Samburu",
  },
  {
    value: "siaya",
    label: "Siaya",
  },

  {
    value: "taita taveta",
    label: "Taita Taveta",
  },
  {
    value: "tana river",
    label: "Tana River",
  },
  {
    value: "tharaka nithi",
    label: "Tharaka Nithi",
  },

  {
    value: "trans nzoia",
    label: "Trans Nzoia",
  },
  {
    value: "turkana",
    label: "Turkana",
  },
  {
    value: "uasin gishu",
    label: "Uasin Gishu",
  },

  {
    value: "vihiga",
    label: "Vihiga",
  },
  {
    value: "wajir",
    label: "Wajir",
  },
  {
    value: "west pokot",
    label: "West Pokot",
  },
];

export function Filter() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null
  );

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? (
              <>{selectedStatus.label}</>
            ) : (
              <>
                <MapPinIcon size={12} className="mr-2" /> Location
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedStatus ? (
            <>{selectedStatus.label}</>
          ) : (
            <>
              <MapPinIcon size={10} className="mr-2" /> Location
            </>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  setOpen,
  setSelectedStatus,
}: {
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: Status | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Type here to search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedStatus(
                  statuses.find((priority) => priority.value === value) || null
                );
                setOpen(false);
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
