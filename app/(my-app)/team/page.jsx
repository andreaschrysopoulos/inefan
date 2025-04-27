import CardTeamMember from "../components/PersonCard";
import config from "../../../payload.config";
import { getPayload } from "payload";

export const metadata = {
  title: "Inefan - Team",
  description: "Independent Economic & Financial Analysis",
};

export default async function Team() {

  const payload = await getPayload({ config })

  const membersDocs = await payload.find({
    collection: 'boardMembers'
  })

  const members = membersDocs.docs
  // console.log(members);

  // const serverTimestamp = new Date().toISOString();
  // console.log(`Built '/team' at [${serverTimestamp}]`);

  return (
    <>
      <div className="flex flex-auto pb-20 px-5 relative">
        <div className={`flex flex-col mx-auto max-w-5xl w-min`}>

          <div className={`flex flex-col transition-all duration-400`}>
            <span className={`font-semibold team3:text-6xl text-5xl mb-2`}>Inefan Board</span>
            <span className={`font team3:text-3xl text-2xl mb-10 dark:text-stone-400 text-stone-600`}>Το Διοικητικό Συμβούλιο της Inefan απαρτίζεται από νέους και δυναμικούς φοιτητές και επαγγελματίες με εξειδίκευση στην οικονομία, τα χρηματοοικονομικά και την επιχειρηματικότητα.
            </span>
          </div>
          {/* <p className="text-sm text-gray-500">Server render: {serverTimestamp}</p> */}
          {/* Board */}
          <div className={`grid gap-10 grid-cols-1 team2:grid-cols-2 team3:grid-cols-3 self-center min-w-70 team2:min-w-168 team3:min-w-258 transition-opacity duration-400`}>
            {members.map((member) => (
              <CardTeamMember
                key={member.id}
                name={member.name}
                role={member.inefanRole}
                bio={member.bio}
                title={member.title}
                img={member.photo.url}
                linkedin={member.linkedin}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};