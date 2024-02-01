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
import { BadgeSwissFrancIcon } from "lucide-react";

type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = [
  { value: "academic librarian", label: "Academic librarian" },

  { value: "accountant", label: "Accountant" },

  { value: "accounting technician", label: "Accounting technician" },

  { value: "actuary", label: "Actuary" },

  { value: "adult nurse", label: "Adult nurse" },
  {
    value: "advertising account executive",
    label: "Advertising account executive",
  },

  {
    value: "advertising account planner",
    label: "Advertising account planner",
  },
  { value: "advertising copywriter", label: "Advertising copywriter" },
  { value: "advice worker", label: "Advice worker" },
  { value: "advocate (scotland)", label: "Advocate (Scotland)" },
  { value: "aeronautical engineer", label: "Aeronautical engineer" },
  { value: "agricultural consultant", label: "Agricultural consultant" },
  { value: "agricultural manager", label: "Agricultural manager" },
  {
    value: "aid worker/humanitarian worker",
    label: "Aid worker/humanitarian worker",
  },
  { value: "air traffic controller", label: "Air traffic controller" },
  { value: "airline cabin crew", label: "Airline cabin crew" },
  { value: "amenity horticulturist", label: "Amenity horticulturist" },
  { value: "analytical chemist", label: "Analytical chemist" },
  { value: "animal nutritionist", label: "Animal nutritionist" },
  { value: "animator", label: "Animator" },
  { value: "archaeologist", label: "Archaeologist" },
  { value: "architect", label: "Architect" },
  { value: "architectural technologist", label: "Architectural technologist" },
  { value: "archivist", label: "Archivist" },
  { value: "armed forces officer", label: "Armed forces officer" },
  { value: "aromatherapist", label: "Aromatherapist" },
  { value: "art therapist", label: "Art therapist" },
  { value: "arts administrator", label: "Arts administrator" },
  { value: "auditor", label: "Auditor" },
  { value: "automotive engineer", label: "Automotive engineer" },
  { value: "barrister", label: "Barrister" },
  { value: "barrister’s clerk", label: "Barrister’s clerk" },
  { value: "bilingual secretary", label: "Bilingual secretary" },
  { value: "biomedical engineer", label: "Biomedical engineer" },
  { value: "biomedical scientist", label: "Biomedical scientist" },
  { value: "biotechnologist", label: "Biotechnologist" },
  { value: "brand manager", label: "Brand manager" },
  { value: "broadcasting presenter", label: "Broadcasting presenter" },
  {
    value: "building control officer/surveyor",
    label: "Building control officer/surveyor",
  },
  { value: "building services engineer", label: "Building services engineer" },
  { value: "building surveyor", label: "Building surveyor" },
  { value: "camera operator", label: "Camera operator" },
  {
    value: "careers adviser (higher education)",
    label: "Careers adviser (higher education)",
  },
  { value: "careers adviser", label: "Careers adviser" },
  { value: "careers consultant", label: "Careers consultant" },
  { value: "cartographer", label: "Cartographer" },
  { value: "catering manager", label: "Catering manager" },
  { value: "charities administrator", label: "Charities administrator" },
  { value: "charities fundraiser", label: "Charities fundraiser" },
  {
    value: "chemical (process) engineer",
    label: "Chemical (process) engineer",
  },
  { value: "child psychotherapist", label: "Child psychotherapist" },
  { value: "children's nurse", label: "Children's nurse" },
  { value: "chiropractor", label: "Chiropractor" },
  { value: "civil engineer", label: "Civil engineer" },
  {
    value: "civil service administrator",
    label: "Civil Service administrator",
  },
  { value: "clinical biochemist", label: "Clinical biochemist" },
  { value: "clinical cytogeneticist", label: "Clinical cytogeneticist" },
  { value: "clinical microbiologist", label: "Clinical microbiologist" },
  {
    value: "clinical molecular geneticist",
    label: "Clinical molecular geneticist",
  },
  {
    value: "clinical research associate",
    label: "Clinical research associate",
  },
  {
    value: "clinical scientist - tissue typing",
    label: "Clinical scientist - tissue typing",
  },
  {
    value: "clothing and textile technologist",
    label: "Clothing and textile technologist",
  },
  { value: "colour technologist", label: "Colour technologist" },
  { value: "commercial horticulturist", label: "Commercial horticulturist" },
  {
    value: "commercial/residential/rural surveyor",
    label: "Commercial/residential/rural surveyor",
  },
  { value: "commissioning editor", label: "Commissioning editor" },
  { value: "commissioning engineer", label: "Commissioning engineer" },
  { value: "commodity broker", label: "Commodity broker" },
  { value: "communications engineer", label: "Communications engineer" },
  { value: "community arts worker", label: "Community arts worker" },
  {
    value: "community education officer",
    label: "Community education officer",
  },
  { value: "community worker", label: "Community worker" },
  { value: "company secretary", label: "Company secretary" },
  { value: "computer sales support", label: "Computer sales support" },
  { value: "computer scientist", label: "Computer scientist" },
  { value: "conference organiser", label: "Conference organiser" },
  { value: "consultant", label: "Consultant" },
  { value: "consumer rights adviser", label: "Consumer rights adviser" },
  {
    value: "control and instrumentation engineer",
    label: "Control and instrumentation engineer",
  },
  { value: "corporate banker", label: "Corporate banker" },
  { value: "corporate treasurer", label: "Corporate treasurer" },
  { value: "counsellor", label: "Counsellor" },
  { value: "courier/tour guide", label: "Courier/tour guide" },
  {
    value: "court reporter/verbatim reporter",
    label: "Court reporter/verbatim reporter",
  },
  { value: "credit analyst", label: "Credit analyst" },
  {
    value: "crown prosecution service lawyer",
    label: "Crown Prosecution Service lawyer",
  },
  { value: "crystallographer", label: "Crystallographer" },
  { value: "curator", label: "Curator" },
  { value: "customs officer", label: "Customs officer" },
  { value: "cyber security specialist", label: "Cyber security specialist" },
  { value: "dance movement therapist", label: "Dance movement therapist" },
  { value: "data analyst", label: "Data analyst" },
  { value: "data scientist", label: "Data scientist" },
  { value: "data visualisation analyst", label: "Data visualisation analyst" },
  { value: "database administrator", label: "Database administrator" },
  { value: "debt/finance adviser", label: "Debt/finance adviser" },
  { value: "dental hygienist", label: "Dental hygienist" },
  { value: "dentist", label: "Dentist" },
  { value: "design engineer", label: "Design engineer" },
  { value: "dietitian", label: "Dietitian" },

  { value: "diplomatic service", label: "Diplomatic service" },
  {
    value: "doctor (general practitioner, gp)",
    label: "Doctor (general practitioner, GP)",
  },
  { value: "doctor (hospital)", label: "Doctor (hospital)" },
  { value: "dramatherapist", label: "Dramatherapist" },
  { value: "economist", label: "Economist" },
  { value: "editorial assistant", label: "Editorial assistant" },
  { value: "education administrator", label: "Education administrator" },
  { value: "electrical engineer", label: "Electrical engineer" },

  { value: "electronics engineer", label: "Electronics engineer" },

  { value: "employment advice worker", label: "Employment advice worker" },

  {
    value: "energy conservation officer",
    label: "Energy conservation officer",
  },

  { value: "engineering geologist", label: "Engineering geologist" },

  {
    value: "environmental education officer",
    label: "Environmental education officer",
  },

  {
    value: "environmental health officer",
    label: "Environmental health officer",
  },
  { value: "environmental manager", label: "Environmental manager" },
  { value: "environmental scientist", label: "Environmental scientist" },
  {
    value: "equal opportunities officer",
    label: "Equal opportunities officer",
  },
  {
    value: "equality and diversity officer",
    label: "Equality and diversity officer",
  },
  { value: "ergonomist", label: "Ergonomist" },
  { value: "estate agent", label: "Estate agent" },
  {
    value: "european commission administrators",
    label: "European Commission administrators",
  },
  {
    value: "exhibition display designer",
    label: "Exhibition display designer",
  },
  { value: "exhibition organiser", label: "Exhibition organiser" },
  { value: "exploration geologist", label: "Exploration geologist" },
  { value: "facilities manager", label: "Facilities manager" },
  { value: "field trials officer", label: "Field trials officer" },
  { value: "financial manager", label: "Financial manager" },
  { value: "firefighter", label: "Firefighter" },
  { value: "fisheries officer", label: "Fisheries officer" },
  { value: "fitness centre manager", label: "Fitness centre manager" },
  { value: "food scientist", label: "Food scientist" },
  { value: "food technologist", label: "Food technologist" },
  { value: "forensic scientist", label: "Forensic scientist" },
  { value: "geneticist", label: "Geneticist" },
  {
    value: "geographical information systems manager",
    label: "Geographical information systems manager",
  },
  { value: "geomatics/land surveyor", label: "Geomatics/land surveyor" },
  { value: "government lawyer", label: "Government lawyer" },
  {
    value: "government research officer",
    label: "Government research officer",
  },
  { value: "graphic designer", label: "Graphic designer" },
  { value: "health and safety adviser", label: "Health and safety adviser" },
  {
    value: "health and safety inspector",
    label: "Health and safety inspector",
  },
  {
    value: "health promotion specialist",
    label: "Health promotion specialist",
  },
  { value: "health service manager", label: "Health service manager" },
  { value: "health visitor", label: "Health visitor" },
  { value: "herbalist", label: "Herbalist" },
  { value: "heritage manager", label: "Heritage manager" },
  {
    value: "higher education administrator",
    label: "Higher education administrator",
  },
  {
    value: "higher education advice worker",
    label: "Higher education advice worker",
  },
  { value: "homeless worker", label: "Homeless worker" },
  { value: "horticultural consultant", label: "Horticultural consultant" },
  { value: "hotel manager", label: "Hotel manager" },
  { value: "housing adviser", label: "Housing adviser" },
  { value: "human resources officer", label: "Human resources officer" },
  { value: "hydrologist", label: "Hydrologist" },
  { value: "illustrator", label: "Illustrator" },
  { value: "immigration officer", label: "Immigration officer" },
  { value: "immunologist", label: "Immunologist" },
  {
    value: "industrial/product designer",
    label: "Industrial/product designer",
  },
  { value: "information scientist", label: "Information scientist" },
  {
    value: "information systems manager",
    label: "Information systems manager",
  },
  {
    value: "information technology/software trainers",
    label: "Information technology/software trainers",
  },
  { value: "insurance broker", label: "Insurance broker" },
  { value: "insurance claims inspector", label: "Insurance claims inspector" },
  { value: "insurance risk surveyor", label: "Insurance risk surveyor" },
  { value: "insurance underwriter", label: "Insurance underwriter" },
  { value: "interpreter", label: "Interpreter" },
  { value: "investment analyst", label: "Investment analyst" },
  {
    value: "investment banker - corporate finance",
    label: "Investment banker - corporate finance",
  },
  {
    value: "investment banker – operations",
    label: "Investment banker – operations",
  },
  { value: "investment fund manager", label: "Investment fund manager" },
  { value: "it consultant", label: "IT consultant" },
  { value: "it support analyst", label: "IT support analyst" },
  { value: "journalist", label: "Journalist" },
  { value: "laboratory technician", label: "Laboratory technician" },
  { value: "land-based engineer", label: "Land-based engineer" },
  { value: "landscape architect", label: "Landscape architect" },
  { value: "learning disability nurse", label: "Learning disability nurse" },
  { value: "learning mentor", label: "Learning mentor" },
  { value: "lecturer (adult education)", label: "Lecturer (adult education)" },
  {
    value: "lecturer (further education)",
    label: "Lecturer (further education)",
  },
  {
    value: "lecturer (higher education)",
    label: "Lecturer (higher education)",
  },
  { value: "legal executive", label: "Legal executive" },
  { value: "leisure centre manager", label: "Leisure centre manager" },
  { value: "licensed conveyancer", label: "Licensed conveyancer" },
  {
    value: "local government administrator",
    label: "Local government administrator",
  },
  { value: "local government lawyer", label: "Local government lawyer" },
  {
    value: "logistics/distribution manager",
    label: "Logistics/distribution manager",
  },
  { value: "magazine features editor", label: "Magazine features editor" },
  { value: "magazine journalist", label: "Magazine journalist" },
  { value: "maintenance engineer", label: "Maintenance engineer" },
  { value: "management accountant", label: "Management accountant" },
  { value: "manufacturing engineer", label: "Manufacturing engineer" },
  {
    value: "manufacturing machine operator",
    label: "Manufacturing machine operator",
  },
  { value: "manufacturing toolmaker", label: "Manufacturing toolmaker" },
  { value: "marine scientist", label: "Marine scientist" },
  { value: "market research analyst", label: "Market research analyst" },
  { value: "market research executive", label: "Market research executive" },
  { value: "marketing account manager", label: "Marketing account manager" },
  { value: "marketing assistant", label: "Marketing assistant" },
  { value: "marketing executive", label: "Marketing executive" },

  {
    value: "marketing manager (social media)",
    label: "Marketing manager (social media)",
  },
  { value: "materials engineer", label: "Materials engineer" },
  { value: "materials specialist", label: "Materials specialist" },
  { value: "mechanical engineer", label: "Mechanical engineer" },
  { value: "media analyst", label: "Media analyst" },
  { value: "media buyer", label: "Media buyer" },
  { value: "media planner", label: "Media planner" },
  { value: "medical physicist", label: "Medical physicist" },
  { value: "medical representative", label: "Medical representative" },
  { value: "mental health nurse", label: "Mental health nurse" },
  { value: "metallurgist", label: "Metallurgist" },
  { value: "meteorologist", label: "Meteorologist" },
  { value: "microbiologist", label: "Microbiologist" },
  { value: "midwife", label: "Midwife" },
  { value: "mining engineer", label: "Mining engineer" },
  { value: "mobile developer", label: "Mobile developer" },
  { value: "multimedia programmer", label: "Multimedia programmer" },
  { value: "multimedia specialists", label: "Multimedia specialists" },
  { value: "museum education officer", label: "Museum education officer" },
  {
    value: "museum/gallery exhibition officer",
    label: "Museum/gallery exhibition officer",
  },
  { value: "music therapist", label: "Music therapist" },
  { value: "nanoscientist", label: "Nanoscientist" },

  {
    value: "nature conservation officer",
    label: "Nature conservation officer",
  },
  { value: "naval architect", label: "Naval architect" },
  { value: "network administrator", label: "Network administrator" },
  { value: "nurse", label: "Nurse" },
  { value: "nutritional therapist", label: "Nutritional therapist" },
  { value: "nutritionist", label: "Nutritionist" },
  { value: "occupational therapist", label: "Occupational therapist" },
  { value: "oceanographer", label: "Oceanographer" },
  { value: "office manager", label: "Office manager" },
  { value: "operational researcher", label: "Operational researcher" },
  { value: "orthoptist", label: "Orthoptist" },
  { value: "outdoor pursuits manager", label: "Outdoor pursuits manager" },
  { value: "packaging technologist", label: "Packaging technologist" },
  { value: "paediatric nurse", label: "Paediatric nurse" },
  { value: "paramedic", label: "Paramedic" },
  { value: "patent attorney", label: "Patent attorney" },
  { value: "patent examiner", label: "Patent examiner" },
  { value: "pension scheme manager", label: "Pension scheme manager" },
  { value: "personal assistant", label: "Personal assistant" },
  { value: "petroleum engineer", label: "Petroleum engineer" },
  { value: "pharmacist", label: "Pharmacist" },
  { value: "pharmacologist", label: "Pharmacologist" },
  { value: "pharmacovigilance officer", label: "Pharmacovigilance officer" },
  { value: "photographer", label: "Photographer" },
  { value: "physiotherapist", label: "Physiotherapist" },
  { value: "picture researcher", label: "Picture researcher" },
  {
    value: "planning and development surveyor",
    label: "Planning and development surveyor",
  },
  { value: "planning technician", label: "Planning technician" },
  { value: "plant breeder", label: "Plant breeder" },
  { value: "police officer", label: "Police officer" },
  { value: "political party agent", label: "Political party agent" },
  {
    value: "political party research officer",
    label: "Political party research officer",
  },
  { value: "practice nurse", label: "Practice nurse" },
  { value: "press photographer", label: "Press photographer" },
  { value: "press sub-editor", label: "Press sub-editor" },
  { value: "prison officer", label: "Prison officer" },
  { value: "private music teacher", label: "Private music teacher" },
  { value: "probation officer", label: "Probation officer" },
  {
    value: "product development scientist",
    label: "Product development scientist",
  },
  { value: "production manager", label: "Production manager" },
  { value: "programme researcher", label: "Programme researcher" },
  { value: "project manager", label: "Project manager" },
  { value: "psychologist (clinical)", label: "Psychologist (clinical)" },
  { value: "psychologist (educational)", label: "Psychologist (educational)" },
  { value: "psychotherapist", label: "Psychotherapist" },
  {
    value: "public affairs consultant (lobbyist)",
    label: "Public affairs consultant (lobbyist)",
  },
  {
    value: "public affairs consultant (research)",
    label: "Public affairs consultant (research)",
  },
  { value: "public house manager", label: "Public house manager" },
  { value: "public librarian", label: "Public librarian" },
  {
    value: "public relations (pr) officer",
    label: "Public relations (PR) officer",
  },
  { value: "qa analyst", label: "QA analyst" },
  { value: "quality assurance manager", label: "Quality assurance manager" },
  { value: "quantity surveyor", label: "Quantity surveyor" },
  { value: "records manager", label: "Records manager" },
  { value: "recruitment consultant", label: "Recruitment consultant" },
  { value: "recycling officer", label: "Recycling officer" },
  { value: "regulatory affairs officer", label: "Regulatory affairs officer" },
  { value: "research chemist", label: "Research chemist" },
  { value: "research scientist", label: "Research scientist" },
  { value: "restaurant manager", label: "Restaurant manager" },
  { value: "retail banker", label: "Retail banker" },
  { value: "retail buyer", label: "Retail buyer" },
  { value: "retail manager", label: "Retail manager" },
  { value: "retail merchandiser", label: "Retail merchandiser" },
  { value: "retail pharmacist", label: "Retail pharmacist" },
  { value: "sales executive", label: "Sales executive" },
  { value: "sales manager", label: "Sales manager" },
  { value: "scene of crime officer", label: "Scene of crime officer" },
  { value: "secretary", label: "Secretary" },
  { value: "seismic interpreter", label: "Seismic interpreter" },
  { value: "site engineer", label: "Site engineer" },
  { value: "site manager", label: "Site manager" },
  { value: "social researcher", label: "Social researcher" },
  { value: "social worker", label: "Social worker" },
  { value: "software developer", label: "Software developer" },
  { value: "soil scientist", label: "Soil scientist" },
  { value: "solicitor", label: "Solicitor" },
  {
    value: "speech and language therapist",
    label: "Speech and language therapy",
  },
  { value: "sports coach", label: "Sports coach" },
  { value: "sports development officer", label: "Sports development officer" },
  { value: "sports therapist", label: "Sports therapist" },
  { value: "statistician", label: "Statistician" },
  { value: "stockbroker", label: "Stockbroker" },
  { value: "structural engineer", label: "Structural engineer" },
  { value: "systems analyst", label: "Systems analyst" },
  { value: "systems developer", label: "Systems developer" },
  { value: "tax inspector", label: "Tax inspector" },
  {
    value: "teacher (nursery/early years)",
    label: "Teacher (nursery/early years)",
  },
  { value: "teacher (primary)", label: "Teacher (primary)" },
  { value: "teacher (secondary)", label: "Teacher (secondary)" },
  {
    value: "teacher (special educational needs)",
    label: "Teacher (special educational needs)",
  },
  {
    value: "teaching/classroom assistant",
    label: "Teaching/classroom assistant",
  },
  { value: "technical author", label: "Technical author" },
  { value: "technical sales engineer", label: "Technical sales engineer" },
  { value: "tefl/tesl teacher", label: "TEFL/TESL teacher" },
  {
    value: "television production assistant",
    label: "Television production assistant",
  },
  { value: "test automation developer", label: "Test automation developer" },
  { value: "tour operator", label: "Tour operator" },
  { value: "tourism officer", label: "Tourism officer" },
  {
    value: "tourist information manager",
    label: "Tourist information manager",
  },
  { value: "town and country planner", label: "Town and country planner" },
  { value: "toxicologist", label: "Toxicologist" },
  {
    value: "trade union research officer",
    label: "Trade union research officer",
  },
  { value: "trader", label: "Trader" },
  { value: "trading standards officer", label: "Trading standards officer" },
  {
    value: "training and development officer",
    label: "Training and development officer",
  },
  { value: "translator", label: "Translator" },
  { value: "transportation planner", label: "Transportation planner" },
  { value: "travel agent", label: "Travel agent" },
  {
    value: "tv/film/theatre set designer",
    label: "TV/film/theatre set designer",
  },
  { value: "ux designer", label: "UX designer" },
  { value: "validation engineer", label: "Validation engineer" },
  { value: "veterinary nurse", label: "Veterinary nurse" },
  { value: "veterinary surgeon", label: "Veterinary surgeon" },
  { value: "video game designer", label: "Video game designer" },
  { value: "video game developer", label: "Video game developer" },
  { value: "volunteer work organiser", label: "Volunteer work organiser" },
  { value: "warehouse manager", label: "Warehouse manager" },
  { value: "waste disposal officer", label: "Waste disposal officer" },
  { value: "water conservation officer", label: "Water conservation officer" },
  { value: "water engineer", label: "Water engineer" },
  { value: "web designer", label: "Web designer" },
  { value: "web developer", label: "Web developer" },
  { value: "welfare rights adviser", label: "Welfare rights adviser" },
  { value: "writer", label: "Writer" },
  { value: "youth worker", label: "Youth worker" },
];

export function JobTitle() {
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
                <BadgeSwissFrancIcon size={12} className="mr-2" /> Field
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
              {" "}
              <BadgeSwissFrancIcon size={10} className="mr-2" /> Field
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
