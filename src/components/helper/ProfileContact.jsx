import { getContactInfo } from "../../utils/contactParser";

export default function ProfileContact({ contact }) {
  const info = getContactInfo(contact);

  if (!info) return null;

  return (
    <div className="flex items-center space-x-3 text-gray-600">
      <i className={info.icon}></i>
      <a
        href={info.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-sage transition-colors"
      >
        {info.username}
      </a>
    </div>
  );
}
