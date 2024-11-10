import { MotionDiv } from "../shared/MotionDiv";

const SkillCard = ({ icon, index }: { icon: any; index: any }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
    >
      <div className="w-fit bg-white rounded-md flex items-center justify-center relative skill-icon text-primary hover:text-white hover:bg-primary after:hover:bg-white cursor-pointer duration-500">
        <div className="text-[60px] p-4">{icon}</div>
      </div>
    </MotionDiv>
  );
};

export default SkillCard;
