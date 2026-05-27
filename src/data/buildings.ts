// TO UPDATE BUILDINGS: Edit public/buildings.json in this project.
// Non-technical editors can also update that file directly via GitHub's web UI.
// Valid status values: "AVAILABLE" or "COMING SOON"
// Images should be placed in the /public/images/ folder.

export interface Building {
  id: string;
  name: string;
  image: string;
  price: string;
  size: string;
  features: string[];
  status: 'AVAILABLE' | 'COMING SOON';
  statusColor: string;
}
