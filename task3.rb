
def wordend(num, words)	
	words[(num%10==1 && num%100!=11 ? 0 : num%10>=2 && num%10<=4 && (num%100<10 || num%100>=20) ? 1 : 2)]
end
def sumTime(t1, t2)
	t1 = t1.to_i
	t2 = t2.to_i
	t = t1 + t2
	h = t/3600
	m = (t - 3600*h)/60
	s = t - 3600*h - 60*m
	hoursArray = %w{час часа часов}
	minutesArray = %w{минута минуты минут}
	secondsArray = %w{секунда секунды секунд}
	puts "#{h} #{wordend(h, hoursArray)}" if (m == 0) && (s == 0)
	puts "#{h} #{wordend(h, hoursArray)} #{m} #{wordend(m, minutesArray)}" if (h != 0) && (m != 0) && (s == 0)
	puts "#{m} #{wordend(m, minutesArray)}"	if (h == 0) && (m != 0) && (s == 0)
	puts "#{h} #{wordend(h, hoursArray)} #{m} #{wordend(m, minutesArray)} #{s} #{wordend(s, secondsArray)}" if (h != 0) && (m != 0) && (s != 0)
	puts "#{h} #{wordend(h, hoursArray)} #{s} #{wordend(s, secondsArray)}" if (h != 0) && (m == 0) && (s != 0)
	puts "#{m} #{wordend(m, minutesArray)} #{s} #{wordend(s, secondsArray)}" if (h == 0) && (m != 0) && (s != 0)
	puts "#{s} #{wordend(s, secondsArray)}" if (h == 0) && (m == 0) && (s != 0)
end
sumTime(ARGV[0], ARGV[1])