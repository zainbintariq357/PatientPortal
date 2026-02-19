
import ProfileIcon from '../../assets/profile.svg?react';

const MessageCard = ({ message, CallMessageDetail }) => {
  return (
    <div
      className={`${message.urgency === 'Urgent' ? 'bg-text-yellow' : ''} rounded-lg mt-4 mx-3 cursor-pointer`}
      onClick={CallMessageDetail}>
      <article className="flex flex-col p-4 ml-1 bg-white rounded-lg shadow-sm">
        <header className="flex justify-between">
          <div className="flex items-center">
            <ProfileIcon />
            <div className="flex flex-col ml-3">
              <p className="font-medium">{message.name}</p>
              <p className="text-[var(--color-gray-500)] text-sm">
                {message.specialization}
              </p>
            </div>
          </div>
          <div>
            <span
              className={`${message.urgency == 'Urgent' ? 'mr-4 rounded-full bg-accent-amber-soft text-text-yellow py-2 px-3 text-xs' : ''} `}>
              {message.urgency}
            </span>
            <time className="text-sm text-gray-500">{message.timeAgo}</time>
          </div>
        </header>
        <section className="flex justify-between">
          <p className="text-base text-text-light-gray text-sm md:text-base">
            {message.messageContent}
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            {message.topic == 'Reminder' && (
              <span className="inline-block w-2 h-2 bg-text-yellow  rounded-full"></span>
            )}
            {message.topic}
          </p>
        </section>
      </article>
    </div>
  );
}

export default MessageCard;