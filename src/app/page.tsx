import { Alert } from "@/components/bootstrap";

export default function Home() {
  return (
    <div>
      <Alert>
        <p>
          This is a simple project to showcase and learn the new{" "}
          <strong> Next Js</strong>
        </p>
        <ul>
          <li>static and dynamuc server-side rendering</li>
          <li>incremental static regeneration</li>
          <li> client-side rending</li>
          <li>route handlers (API endpoints)</li>
          <li>meta-data API</li>
          <li>and more</li>
        </ul>
        <p className="mb-0">
          Every page usees a different approach to{" "}
          <strong> fetch and caching data</strong>
        </p>
      </Alert>
      <Alert variant="secondary">
        <p>
          Note: In order to load the data on this site, you need to get a{" "}
          <a href="https://unsplash.com/documentation">
            {" "}
            free API key from Unsplash
          </a>{" "}
          and add it to your <i>.env.local</i> file as UNSPLASH_ACCESS_KEY
        </p>
        <p className="mb-0">
          {" "}
          Unsplash has a free quota of 50 request per hour
        </p>
      </Alert>
    </div>
  );
}
