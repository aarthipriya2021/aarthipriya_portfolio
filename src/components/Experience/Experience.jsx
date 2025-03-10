import DownloadIcon from "@mui/icons-material/Download";
import myPDF from "../../assets/files/aarthipriya_resume.pdf"

export default function Experience() {
  return (
    <div id="experience" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Experience
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
        <ol className="relative border-l  border-gray-700 ml-9 mb-6">
          <li className="mb-10" data-aos="zoom-in">
            <span className="absolute flex items-center justify-center w-6 h-6   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3  text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-bold  text-white ml-10">
              Frontend Development Intern
            </h3>
            <h5 className="flex items-center mb-1 text-md font-light  text-white ml-10">
              Appin Technologies - Coimbatore
            </h5>
            <time className="flex items-center pt-1 pb-3  text-sm font-normal leading-none  text-gray-500 ml-10">
              Nov&apos; 2024 - Feb&apos; 2025
            </time>
            <p className="text-left font-normal text-gray-400">
              <ol className="list-inside md:list-inside list-disc ms-5 pl-5">
                <li>
                  Completed a frontend development internship and course,
                  gaining hands-on experience in building responsive web
                  applications.
                </li>
                <li>
                  Implemented interactive UI components to enhance user
                  experience and accessibility.
                </li>
                <li>
                  Debugged and resolved frontend issues to ensure a seamless
                  user experience
                </li>
              </ol>
            </p>
          </li>
          <li className="mb-10" data-aos="zoom-out" data-aos-delay="700">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-bold  text-white ml-10">
              Frontend UI Trainee
            </h3>
            <h5 className="flex items-center mb-1 text-lg font-light  text-white ml-10">
              SearchBlox Software Inc - Remote
            </h5>
            <time className="flex items-center mb-2 text-sm font-normal leading-none text-gray-500 ml-10">
              2021 - 2022
            </time>
            <p className="text-left font-normal text-gray-400">
              <ol className="list-inside md:list-inside list-disc ms-5 pl-5 space-y-2">
                <li>
                  Used Frontend technologies like HTML,CSS, JS, React JS, Sass
                  to create the frontend portion of application.
                </li>
                <li>Used GIT tool, for build application fast and reliable.</li>
                <li>
                  Maintained the code readability, and responsiveness of an
                  application.
                </li>
                <li>
                  Collaborated with team members to achieve target results.
                </li>
                <li>
                  Attend meetings with UI development teams, project managers,
                  and customers to ensure alignment with project specifications.
                </li>
              </ol>
            </p>
          </li>
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">My Skills</div>
          <div className="ml-10 flex flex-row gap-8 mt-6 flex-wrap sm:ml-4">
            <div className="ml-10 flex flex-row gap-8 mt-6 flex-wrap sm:ml-4">
              <span>
                <svg viewBox="0 0 128 128" width="80px" height="80px">
                  <path
                    fill="#E44D26"
                    d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"
                  ></path>
                  <path
                    fill="#F16529"
                    d="M64 118.704l29.244-8.108 6.881-77.076H64z"
                  ></path>
                  <path
                    fill="#EBEBEB"
                    d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"
                  ></path>
                  <path
                    fill="#EBEBEB"
                    d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"
                  ></path>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 128 128" width="80px" height="80px">
                  <path
                    fill="#fff"
                    d="M89.234 5.856H81.85l7.679 8.333v3.967H73.713v-4.645h7.678l-7.678-8.333V1.207h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967H55.055v-4.645h7.679l-7.679-8.333V1.207h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839H38.471V1.207h13.632v4.839z"
                  ></path>
                  <path
                    fill="#1572B6"
                    d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"
                  ></path>
                  <path
                    fill="#33A9DC"
                    d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z"
                  ></path>
                  <path
                    fill="#EBEBEB"
                    d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015V95.146z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647H77.792z"
                  ></path>
                  <path
                    fill="#EBEBEB"
                    d="M64.039 43.677v11.137H37.136l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988H64z"
                  ></path>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 128 128" width="80px" height="80px">
                  <path
                    fill="#F0DB4F"
                    d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="ml-10 flex flex-row gap-8 mt-6 flex-wrap sm:ml-4">
            <div className="ml-10 flex flex-row gap-8 mt-6 flex-wrap sm:ml-4">
              <span>
                <svg viewBox="0 0 128 128" width="80px" height="80px">
                  <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                  </g>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 128 128" width="80px" height="80px">
                  <path
                    d="m41.135 3.8146c-2.6492 0-5.0168 0.5933-7.037 1.7624-1.9426 1.1244-3.5749 2.7996-4.8527 4.9798-1.1972 2.0429-2.0792 4.5292-2.6229 7.3892-1.0468 5.5127-0.82002 12.414 0.65649 19.954 0.18621 0.94893 0.39151 1.9098 0.61173 2.8647-1.1781 0.35809-2.3222 0.72687-3.4096 1.1058-7.1176 2.4815-13.07 5.724-17.213 9.3783-2.1485 1.8925-3.81 3.8929-4.9469 5.9454-1.208 2.1825-1.8209 4.4212-1.8209 6.6539 0 4.4761 2.4797 9.0118 7.1706 13.126 4.4164 3.8751 10.662 7.2584 18.057 9.7877 0.68693 0.23335 1.3858 0.46013 2.0888 0.67677-0.24589 1.0701-0.47323 2.1485-0.67794 3.2228-1.4061 7.4052-1.5702 14.182-0.47745 19.596 0.56757 2.805 1.4687 5.2453 2.679 7.2553 1.2867 2.1366 2.9202 3.7862 4.8544 4.9017 2.0381 1.1751 4.4368 1.7707 7.129 1.7707 3.6656 0 7.7639-1.0868 12.181-3.2306 4.3304-2.1014 8.7511-5.111 13.138-8.9455 0.67619-0.59084 1.3727-1.2229 2.0686-1.8818h1.0389v-2e-3h31.486c4.5923 0 8.5534-0.67018 11.883-2.0106 3.3368-1.338 6.0516-3.1441 8.1888-5.412s3.6955-4.9732 4.6945-8.1166c0.99906-3.1171 1.498-6.4932 1.498-10.1 2e-3 -6.2886-1.1386-11.493-3.3952-15.668-2.2384-4.116-5.5317-6.7862-9.8797-8.0109a0.17009 0.17009 0 0 1-0.10678-0.17018 0.17904 0.17904 0 0 1 0.0817-0.15993c3.2371-1.8 5.7252-4.3633 7.4691-7.6332 1.7566-3.298 2.6351-7.2665 2.6355-11.906 0-7.6541-1.9367-13.348-5.7927-17.135-3.856-3.7874-8.9891-5.6697-15.38-5.6697h-34.46c-0.53662-0.50387-1.0841-1.0042-1.6311-1.4914-4.5549-4.0416-9.0972-7.2124-13.504-9.417-4.5185-2.2631-8.6914-3.4102-12.402-3.4102zm0.0376 8.9927c2.2959 0 5.2662 0.90117 8.5886 2.6063 3.6012 1.8501 7.5061 4.6021 11.293 7.9645 0.23475 0.20848 0.47488 0.42505 0.72037 0.64985-3.3308 3.6829-6.6132 7.7753-9.7686 12.181-5.3761 0.5252-10.544 1.3094-15.383 2.3341-0.17487-0.7663-0.33906-1.5368-0.48945-2.2977l-0.0143-0.0788c-1.1536-5.8941-1.4347-11.28-0.81281-15.567 0.53713-3.6847 1.7391-6.3185 3.3045-7.225 0.64993-0.37659 1.5124-0.56697 2.5622-0.56697zm27.308 17.013v68.336l-4.0517-5.0026-2.647-3.2675c-1.3363-1.6496-3.4764-4.7023-6.0278-8.5941-2.0292-3.0939-3.5069-5.5783-4.2075-6.7815l-0.0763-0.13195c-1.2229-2.1085-2.1312-3.807-2.8605-5.1707-0.91312-1.7087-1.8137-3.4537-2.6803-5.1922l0.15876-0.30854 0.01-0.0174c0.9549-1.9468 1.9599-3.9013 2.9942-5.8099l9e-3 -0.0161 1.0974-2.1294 1.621-2.6856 0.0101-0.0174c0.60517-1.0301 1.233-2.0697 1.8662-3.0902l1.1155-1.8424c1.4849-2.4583 2.6785-4.2511 4.5614-6.849 1.0146-1.3983 1.9766-2.626 3.5009-4.531l4e-3 -4e-3 0.0752-0.0949 0.0293-0.0375c0.6189-0.78898 1.2437-1.5666 1.8566-2.3115l0.0203-0.0251 0.0119-0.0149c1.1922-1.4763 2.4033-2.9556 3.6101-4.4109zm12.651 1.3433h20.259c3.3988 0 5.9984 0.95494 7.7972 2.8379 1.7988 1.8829 2.6977 5.1564 2.6977 9.7984 0 4.1287-0.99906 7.2763-2.999 9.4941-1.9999 2.2178-4.4982 3.3016-7.4978 3.3016h-20.259c-0.0746 0-0.13545-0.0782-0.13545-0.17484l1e-3 -25.082c0-0.0967 0.0597-0.17484 0.13545-0.17484zm-35.663 14.932c-0.73288 1.2002-1.4526 2.4117-2.1485 3.6191s-1.3798 2.4285-2.0483 3.6573c-0.80748-2.0709-1.5469-4.1258-2.2082-6.1358 2.0632-0.42553 4.2081-0.80756 6.405-1.1406zm-15.158 3.3517c1.5236 4.7226 3.4306 9.6081 5.6704 14.54l5.8e-4 5.8e-4c-2.2738 5.0132-4.2064 9.9763-5.7515 14.769-0.53713-0.16711-1.0677-0.34145-1.5905-0.5193-6.1472-2.1014-11.267-4.8138-14.806-7.8439-2.7077-2.3186-4.3239-4.7644-4.3239-6.5429 0-1.8256 1.6168-4.1776 4.4367-6.4574 3.2825-2.654 7.9537-5.0795 13.499-7.0125 0.94236-0.32705 1.902-0.64041 2.8647-0.93345zm50.82 18.747h21.952c3.7993 0 6.7182 1.187 8.8369 3.6614 2.1187 2.4744 3.159 5.9574 3.159 10.522 1e-3 4.6414-1.0599 8.2521-3.1577 10.779-2.0805 2.552-5.0377 3.8196-8.837 3.8196h-21.953c-0.0746 0-0.13545-0.0782-0.13545-0.17485v-28.432c0-0.0967 0.0596-0.17485 0.13545-0.17485zm-39.85 6.3948c0.6738 1.2354 1.3649 2.4648 2.0638 3.6721 0.73228 1.2646 1.492 2.5353 2.2648 3.7945-2.2953-0.31751-4.5131-0.68811-6.6198-1.1047v-5.8e-4c0.68335-2.0805 1.4509-4.2111 2.2912-6.3614zm-4.7291 15.052c4.7745 0.97698 10.002 1.7135 15.562 2.191 3.1858 4.4367 6.4957 8.5564 9.8504 12.261-0.41419 0.38136-0.83198 0.7567-1.2474 1.1214-4.8562 4.2451-9.7333 7.314-14.101 8.8752l-0.0908 0.0322c-1.9575 0.69111-3.7056 1.0415-5.1922 1.0415-1.0969 0-1.9826-0.18984-2.6325-0.56463-1.5822-0.91253-2.8133-3.4889-3.3779-7.0692-0.66007-4.1723-0.42911-9.4278 0.66664-15.198l5.8e-4 5.8e-4c0.17069-0.89521 0.35807-1.7958 0.56277-2.691z"
                    fill="#41e0ff"
                  ></path>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 128 128" width="80px" height="80px">
                  <defs>
                    <linearGradient
                      id="a"
                      x1="76.079"
                      x2="523.48"
                      y1="10.798"
                      y2="365.95"
                      gradientTransform="translate(1.11 14.613) scale(.24566)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#9013fe"></stop>
                      <stop offset="1" stopColor="#6610f2"></stop>
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="193.51"
                      x2="293.51"
                      y1="109.74"
                      y2="278.87"
                      gradientTransform="translate(0 52)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#fff"></stop>
                      <stop offset="1" stopColor="#f1e5fc"></stop>
                    </linearGradient>
                    <filter
                      id="c"
                      width="197"
                      height="249"
                      x="161.9"
                      y="135.46"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="4"></feOffset>
                      <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      ></feBlend>
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                  <path
                    fill="url(#a)"
                    d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"
                  ></path>
                  <path
                    fill="url(#b)"
                    d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z"
                    filter="url(#c)"
                    transform="translate(1.494 2.203) scale(.24566)"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="ml-10 flex flex-row gap-8 mt-6 flex-wrap sm:ml-4">
            <div className="ml-10 flex flex-row gap-8 mt-6 flex-wrap sm:ml-4">
              <span>
                <svg viewBox="0 0 128 128" width="80px" height="80px">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#CB6699"
                    d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 00-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.384 10.384 0 002.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 00-.48 1.364 1.737 1.737 0 001.383 1.971 9.661 9.661 0 002.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.869.869 0 00-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 00-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a2.854 2.854 0 00-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.643 11.643 0 00-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172.189 172.189 0 011.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 01-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 01-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 00-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 01-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 011.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.385 2.385 0 01.093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"
                  ></path>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 128 128" width="80px" height="80px">
                  <path
                    fill="#F34F29"
                    d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
                  ></path>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 128 128" width="80px" height="80px">
                  <mask
                    id="a"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                    style={{maskType:"alpha"}}
                  >
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
                      clipRule="evenodd"
                    ></path>
                  </mask>
                  <g mask="url(#a)">
                    <path
                      fill="#0065A9"
                      d="M123.471 13.82 97.097 1.12A7.973 7.973 0 0 0 88 2.668L1.662 81.387a5.333 5.333 0 0 0 .006 7.887l7.052 6.411a5.333 5.333 0 0 0 6.811.303l103.971-78.875c3.488-2.646 8.498-.158 8.498 4.22v-.306a8.001 8.001 0 0 0-4.529-7.208Z"
                    ></path>
                    <g filter="url(#b)">
                      <path
                        fill="#007ACC"
                        d="m123.471 114.181-26.374 12.698A7.973 7.973 0 0 1 88 125.333L1.662 46.613a5.333 5.333 0 0 1 .006-7.887l7.052-6.411a5.333 5.333 0 0 1 6.811-.303l103.971 78.874c3.488 2.647 8.498.159 8.498-4.219v.306a8.001 8.001 0 0 1-4.529 7.208Z"
                      ></path>
                    </g>
                    <g filter="url(#c)">
                      <path
                        fill="#1F9CF0"
                        d="M97.098 126.882A7.977 7.977 0 0 1 88 125.333c2.952 2.952 8 .861 8-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.977 7.977 0 0 1 9.098-1.549L123.467 13.8A8 8 0 0 1 128 21.01v85.982a8 8 0 0 1-4.533 7.21l-26.369 12.681Z"
                      ></path>
                    </g>
                    <path
                      fill="url(#d)"
                      fillRule="evenodd"
                      d="M90.69 127.126a7.968 7.968 0 0 0 6.349-.244l26.353-12.681a8 8 0 0 0 4.53-7.21V21.009a8 8 0 0 0-4.53-7.21L97.039 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026-21.974-16.68a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.336 5.336 0 0 0-.006 7.888L20.718 64 1.662 81.386a5.335 5.335 0 0 0 .006 7.888l7.048 6.411a5.328 5.328 0 0 0 6.807.303l21.975-16.681 50.45 46.026a7.959 7.959 0 0 0 2.742 1.793Zm5.252-92.184L57.662 64l38.28 29.057V34.943Z"
                      clipRule="evenodd"
                      opacity="0.25"
                      style={{mixBlendMode:"overlay"}}
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="b"
                      width="144.744"
                      height="113.408"
                      x="-8.41115"
                      y="22.5944"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="4.16667"></feGaussianBlur>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="overlay"
                        result="effect1_dropShadow_1_36"
                      ></feBlend>
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_36"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <filter
                      id="c"
                      width="56.6667"
                      height="144.007"
                      x="79.6667"
                      y="-8.0035"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="4.16667"></feGaussianBlur>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="overlay"
                        result="effect1_dropShadow_1_36"
                      ></feBlend>
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_36"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <linearGradient
                      id="d"
                      x1="63.9222"
                      x2="63.9222"
                      y1="0.329902"
                      y2="127.67"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff"></stop>
                      <stop
                        offset="1"
                        stopColor="#fff"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>

          <a
            href={myPDF}
            download={"Aarthi's Resume"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex sm:block items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700 sm:block"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
