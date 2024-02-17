import { FileUpload } from '@/components/base/FileUpload';

export default function Home() {
  return (
    <div className="container">
      <div className="mt-10 flex flex-col items-center justify-center gap-6">
        <h1 className=" text-[48px] text-white">AUTO__PARTS</h1>

        <FileUpload />
      </div>
    </div>
  );
}
