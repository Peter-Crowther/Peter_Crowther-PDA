### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.

# val should be in parameters
# indentation could be better at return
# val == 1
def func1 val
  if val = 1
  return true
  else
  return false
  end
end


# dif should be def
# a b should be in parameters with a comma between a and b
# too many indentations after if
#  after else it should be return b
# one too many end
dif max a b
  if a > b
      return a
  else
  b
  end
end
end


# returns rather than puts
# return i
def looper
  for i in 1..10
  puts i
  end
end

failures = 0

# missing and end after else
if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1

# func1 is poor naming convention, too vague
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end

# misspelling of failures after else
if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end

# insert failures != 0
if failures
  puts "Test Failed"
else
  puts "Test Passed"
end
