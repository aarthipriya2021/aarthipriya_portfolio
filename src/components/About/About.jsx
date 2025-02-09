import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About() {
  const getDate = () => {
    var dob = new Date("01/21/2003");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-sm lg:text-lg  font-normal"
    >
      <div
        className="head text-3xl lg:text-5xl mt-12 font-bold"
        data-aos={"slide-down"}
      >
        About Me
      </div>
      <div className="ml-8 sm:ml-0 flex flex-row flex-wrap gap-6">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3
            className="text-xl lg:text-3xl font-medium"
            data-aos={"fade-left"}
          >
            I'm <span className="text-yellow-600">Aarthipriya Ayyappan,</span> a Frontend Developer
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify pl-5"
            data-aos={"fade-left"}
          >
            Hi, I'm Aarthipriya, a Chemistry graduate turned Frontend UI Developer. I specialize in HTML, CSS, JavaScript, ReactJS, and Bootstrap, with professional experience as a remote Frontend UI Trainee at Searchblox Software Inc since August 2021. I'm also familiar with GitHub and have completed a WordPress certification on Udemy. Currently, I'm actively seeking new opportunities to further my career in Frontend UI development.
          </p>
          
        </div>

        <div
          className="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy w-[180px]  md:w-[290px] lg:w-[200px] hidden md:block ">
          <div
            data-aos={"fade-left"}
            className="w-[180px]  md:w-[0px] lg:w-[350px] hidden md:block"
          >
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
            </div>
          </div>

          <a
            href={"../../assets/files/Daniel Resume.pdf"}
            download={"Dani's Resume"}
            target="_blank"
            rel="noreferrer"
            className="py-1 md:py-2 lg:py-3 mt-3 lg:mt-5 text-white mx-auto px-4  lg:px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 sm:text-xl  animate-zoomy sm:block"
          >
            Download CV
            <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
